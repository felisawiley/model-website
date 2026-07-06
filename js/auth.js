const AUTH_KEY = "fee-portfolio-auth";

function isAuthenticated() {
  return sessionStorage.getItem(AUTH_KEY) === "1";
}

function setAuthenticated() {
  sessionStorage.setItem(AUTH_KEY, "1");
}

function checkPassword(value) {
  return value === SITE_CONFIG.password;
}

function showSiteGate() {
  const gate = document.getElementById("site-gate");
  if (gate) {
    gate.hidden = false;
    document.body.classList.add("site-locked");
  }
}

function hideSiteGate() {
  const gate = document.getElementById("site-gate");
  if (gate) {
    gate.hidden = true;
    document.body.classList.remove("site-locked");
  }
}

function initAuth() {
  if (SITE_CONFIG.protectEntireSite && !isAuthenticated()) {
    showSiteGate();
  } else {
    hideSiteGate();
  }

  const siteGateForm = document.getElementById("site-gate-form");
  const siteGateError = document.getElementById("site-gate-error");

  if (siteGateForm) {
    siteGateForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("site-gate-password");
      if (checkPassword(input.value)) {
        setAuthenticated();
        hideSiteGate();
        if (siteGateError) siteGateError.hidden = true;
        input.value = "";
      } else if (siteGateError) {
        siteGateError.hidden = false;
      }
    });
  }
}

initAuth();
