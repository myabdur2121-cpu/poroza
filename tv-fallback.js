/* Poroza 2.4 — Pure ES5 Unbreakable Smart-TV Classroom Fallback
   Activates ONLY on legacy Smart TVs / broken Android WebViews if both ESM & SystemJS fail.
   Modern mobile & desktop browsers never download or execute this file. */
(function () {
  if (window.__POROZA_BOOTED__ || window.__POROZA_TV_ACTIVE__) return;
  window.__POROZA_TV_ACTIVE__ = true;
  window.__POROZA_BOOTED__ = true;

  var state = {
    subjects: [],
    lessons: [],
    activeSub: 'all',
    activeLesson: null,
    tvFs: false,
    dark: document.documentElement.getAttribute('data-theme') === 'dark',
    hlsInstance: null
  };

  function xhrJson(url, cb) {
    try {
      var x = new XMLHttpRequest();
      x.open('GET', url, true);
      x.onreadystatechange = function () {
        if (x.readyState === 4) {
          if ((x.status >= 200 && x.status < 300) || (x.status === 0 && x.responseText)) {
            try {
              cb(null, JSON.parse(x.responseText));
            } catch (e) {
              cb(e);
            }
          } else {
            cb(new Error('HTTP ' + x.status));
          }
        }
      };
      x.send(null);
    } catch (err) {
      cb(err);
    }
  }

  function esc(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function injectTvStyles() {
    if (document.getElementById('poroza-tv-css')) return;
    var st = document.createElement('style');
    st.id = 'poroza-tv-css';
    st.textContent =
      '.ptv-wrap{min-height:100vh;font-family:sans-serif;padding-bottom:48px;}' +
      '.ptv-light{background:#FFFFFF;color:#0A0A0B;}' +
      '.ptv-dark{background:#09090B;color:#FAFAFA;}' +
      '.ptv-nav{padding:14px 24px;border-bottom:1px solid rgba(128,128,128,0.22);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;}' +
      '.ptv-brand{display:flex;align-items:center;cursor:pointer;}' +
      '.ptv-brand img{width:28px;height:28px;margin-right:10px;border-radius:6px;}' +
      '.ptv-title{font-size:20px;font-weight:700;}' +
      '.ptv-badge{font-size:11px;padding:2px 7px;border:1px solid rgba(128,128,128,0.35);border-radius:4px;margin-left:8px;}' +
      '.ptv-container{max-width:1200px;margin:0 auto;padding:22px 24px;}' +
      '.ptv-tabs{margin-bottom:20px;}' +
      '.ptv-btn{display:inline-block;margin:0 8px 8px 0;padding:9px 16px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;border:1px solid rgba(128,128,128,0.35);background:transparent;color:inherit;}' +
      '.ptv-btn:focus{outline:3px solid currentColor;outline-offset:2px;}' +
      '.ptv-light .ptv-btn-act{background:#0A0A0B;color:#FFFFFF;border-color:#0A0A0B;}' +
      '.ptv-dark .ptv-btn-act{background:#FFFFFF;color:#09090B;border-color:#FFFFFF;}' +
      '.ptv-grid{overflow:hidden;margin:0 -8px;}' +
      '.ptv-col{float:left;width:33.333%;padding:8px;box-sizing:border-box;}' +
      '@media (max-width:960px){.ptv-col{width:50%;}}' +
      '@media (max-width:600px){.ptv-col{width:100%;}}' +
      '.ptv-card{border:1px solid rgba(128,128,128,0.25);border-radius:10px;overflow:hidden;cursor:pointer;height:100%;}' +
      '.ptv-card:focus{outline:3px solid currentColor;outline-offset:2px;}' +
      '.ptv-thumb{position:relative;width:100%;padding-top:56.25%;background:#000;}' +
      '.ptv-thumb img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}' +
      '.ptv-dur{position:absolute;right:8px;bottom:8px;background:rgba(0,0,0,0.85);color:#fff;font-size:11px;padding:2px 6px;border-radius:4px;}' +
      '.ptv-body{padding:12px 14px;}' +
      '.ptv-player-box{position:relative;width:100%;padding-top:56.25%;background:#000;border-radius:10px;overflow:hidden;margin-bottom:16px;outline:none !important;}' +
      '.ptv-player-box.ptv-fs{position:fixed !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;width:100vw !important;height:100vh !important;padding-top:0 !important;margin:0 !important;border-radius:0 !important;z-index:99999 !important;}' +
      '.ptv-player-box video{position:absolute;top:0;left:0;width:100%;height:100%;background:#000;outline:none !important;}' +
      '.ptv-fs-btn{position:absolute;top:12px;right:12px;z-index:10;background:rgba(12,12,15,0.85);color:#fff;border:1px solid rgba(255,255,255,0.3);padding:7px 13px;border-radius:7px;font-size:13px;font-weight:700;cursor:pointer;}';
    document.head.appendChild(st);
  }

  function destroyHls() {
    if (state.hlsInstance) {
      try {
        state.hlsInstance.destroy();
      } catch (e) {}
      state.hlsInstance = null;
    }
  }

  function ensureHlsLib(cb) {
    if (window.Hls) {
      cb();
      return;
    }
    var s = document.createElement('script');
    s.src = './assets/hls-tv.min.js';
    s.onload = function () {
      cb();
    };
    s.onerror = function () {
      cb();
    };
    document.body.appendChild(s);
  }

  function attachStream(video, streamUrl) {
    destroyHls();
    // On Android TV AOSP browsers, prefer native HLS first if supported cleanly, else hls.js
    ensureHlsLib(function () {
      if (window.Hls && window.Hls.isSupported()) {
        var hls = new window.Hls({ enableWorker: false, maxBufferLength: 30 });
        state.hlsInstance = hls;
        hls.loadSource(streamUrl);
        hls.attachMedia(video);
      } else if (
        video.canPlayType('application/vnd.apple.mpegurl') ||
        video.canPlayType('application/x-mpegURL')
      ) {
        video.src = streamUrl;
      } else {
        video.src = streamUrl;
      }
    });
  }

  function render() {
    injectTvStyles();
    var root = document.getElementById('root');
    if (!root) return;

    var themeCls = state.dark ? 'ptv-dark' : 'ptv-light';
    var html = '<div class="ptv-wrap ' + themeCls + '">';

    // Top bar
    html += '<div class="ptv-nav">';
    html += '<div class="ptv-brand" id="ptv-home-btn" tabindex="0">';
    html += '<img src="./assets/favicon.png" alt="Poroza" />';
    html += '<span class="ptv-title">Poroza</span>';
    html += '<span class="ptv-badge">SMART TV MODE</span>';
    html += '</div>';
    html += '<div>';
    if (state.activeLesson) {
      html += '<button class="ptv-btn" id="ptv-back-btn">← সকল ক্লাস</button>';
    }
    html +=
      '<button class="ptv-btn" id="ptv-theme-btn">' +
      (state.dark ? '☀ Light' : '☾ Dark') +
      '</button>';
    html += '</div></div>';

    html += '<div class="ptv-container">';

    if (state.activeLesson) {
      var les = state.activeLesson;
      html += '<div class="ptv-player-box" id="ptv-pbox">';
      html += '<button class="ptv-fs-btn" id="ptv-fs-toggle">⛶ পুরো পর্দা</button>';
      html +=
        '<video id="ptv-video" controls playsinline preload="metadata" controlsList="nodownload nofullscreen" poster="./' +
        esc(les.poster) +
        '"></video>';
      html += '</div>';
      html +=
        '<div style="margin-bottom:8px;font-size:13px;opacity:0.75;">' +
        esc(les.subjectLabel) +
        ' · ' +
        esc(les.code) +
        ' · ' +
        esc(les.duration) +
        '</div>';
      html += '<h1 style="font-size:24px;margin:0 0 8px 0;">' + esc(les.title) + '</h1>';
      html += '<p style="font-size:15px;opacity:0.82;margin:0 0 20px 0;">' + esc(les.subtitle) + '</p>';
    } else {
      html += '<h1 style="font-size:26px;margin:0 0 8px 0;">Poroza — ভিজ্যুয়াল অনলাইন ক্লাসরুম</h1>';
      html +=
        '<p style="font-size:14px;opacity:0.78;margin:0 0 18px 0;">নবম-দশম ও এসএসসি (SSC) · ২৪টি পূর্ণাঙ্গ ক্লাস · রিমোট দিয়ে যেকোনো ক্লাসে OK চাপুন</p>';

      html += '<div class="ptv-tabs">';
      html +=
        '<button class="ptv-btn ' +
        (state.activeSub === 'all' ? 'ptv-btn-act' : '') +
        '" data-sub="all">সব বিষয় (' +
        state.lessons.length +
        ')</button>';
      for (var s = 0; s < state.subjects.length; s++) {
        var sub = state.subjects[s];
        html +=
          '<button class="ptv-btn ' +
          (state.activeSub === sub.id ? 'ptv-btn-act' : '') +
          '" data-sub="' +
          esc(sub.id) +
          '">' +
          esc(sub.shortTitle || sub.title) +
          ' (' +
          sub.lessonCount +
          ')</button>';
      }
      html += '</div>';

      html += '<div class="ptv-grid">';
      var shown = 0;
      for (var i = 0; i < state.lessons.length; i++) {
        var item = state.lessons[i];
        if (state.activeSub !== 'all' && item.subjectId !== state.activeSub) continue;
        html += '<div class="ptv-col">';
        html += '<div class="ptv-card" tabindex="0" data-lesson="' + esc(item.id) + '">';
        html += '<div class="ptv-thumb">';
        html += '<img src="./' + esc(item.poster) + '" alt="' + esc(item.title) + '" />';
        html += '<span class="ptv-dur">' + esc(item.duration) + '</span>';
        html += '</div>';
        html += '<div class="ptv-body">';
        html +=
          '<div style="font-size:11.5px;opacity:0.7;margin-bottom:4px;">' +
          esc(item.subjectLabel) +
          ' · ' +
          esc(item.code) +
          '</div>';
        html += '<div style="font-size:16px;font-weight:700;margin-bottom:4px;">' + esc(item.title) + '</div>';
        html += '<div style="font-size:12.5px;opacity:0.8;">' + esc(item.subtitle) + '</div>';
        html += '</div></div></div>';
        shown++;
        if (shown % 3 === 0) {
          html += '<div style="clear:both;"></div>';
        }
      }
      html += '<div style="clear:both;"></div></div>';
    }

    html += '</div></div>';
    root.innerHTML = html;

    // Bind events
    var homeBtn = document.getElementById('ptv-home-btn');
    if (homeBtn) {
      homeBtn.onclick = function () {
        destroyHls();
        state.activeLesson = null;
        render();
      };
    }
    var backBtn = document.getElementById('ptv-back-btn');
    if (backBtn) {
      backBtn.onclick = function () {
        destroyHls();
        state.activeLesson = null;
        render();
      };
    }
    var themeBtn = document.getElementById('ptv-theme-btn');
    if (themeBtn) {
      themeBtn.onclick = function () {
        state.dark = !state.dark;
        document.documentElement.setAttribute('data-theme', state.dark ? 'dark' : 'light');
        render();
      };
    }

    var subBtns = root.querySelectorAll('[data-sub]');
    for (var b = 0; b < subBtns.length; b++) {
      subBtns[b].onclick = function () {
        state.activeSub = this.getAttribute('data-sub');
        render();
      };
    }

    var cards = root.querySelectorAll('[data-lesson]');
    for (var c = 0; c < cards.length; c++) {
      cards[c].onclick = function () {
        var lid = this.getAttribute('data-lesson');
        for (var k = 0; k < state.lessons.length; k++) {
          if (state.lessons[k].id === lid) {
            state.activeLesson = state.lessons[k];
            break;
          }
        }
        render();
      };
      cards[c].onkeydown = function (ev) {
        if (ev.keyCode === 13) this.click();
      };
    }

    if (state.activeLesson) {
      var vid = document.getElementById('ptv-video');
      var pbox = document.getElementById('ptv-pbox');
      var fsBtn = document.getElementById('ptv-fs-toggle');
      if (fsBtn && pbox) {
        fsBtn.onclick = function () {
          state.tvFs = !state.tvFs;
          pbox.className = state.tvFs ? 'ptv-player-box ptv-fs' : 'ptv-player-box';
          fsBtn.innerHTML = state.tvFs ? '✕ ছোট পর্দা' : '⛶ পুরো পর্দা';
        };
      }
      if (vid) {
        attachStream(vid, './' + state.activeLesson.stream);
      }
    }
  }

  xhrJson('./api/subjects.json', function (err1, subs) {
    xhrJson('./api/lessons.json', function (err2, less) {
      if (err1 || err2 || !less) {
        var r = document.getElementById('root');
        if (r) {
          r.innerHTML =
            '<div style="padding:40px 24px;text-align:center;font-family:sans-serif;">' +
            '<h2>Poroza সংযোগ পুনরায় চেষ্টা করুন</h2>' +
            '<p>ইন্টারনেট সংযোগ পরীক্ষা করে পেজটি Refresh দিন।</p></div>';
        }
        return;
      }
      state.subjects = subs || [];
      state.lessons = less || [];
      render();
    });
  });
})();
