// Instagram Mass Unlike Bot - VERSION FINALE FONCTIONNELLE
// 1. Va sur instagram.com/your_activity/interactions/likes/
// 2. Clique sur "Select" en haut à droite UNE FOIS pour démarrer
// 3. F12 → Console → colle ce script → Entrée

const DELAY = 800;
const RELOAD_WAIT = 10000; // 10 sec après scroll avant de re-cliquer Select

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function getCercles() {
  return [...document.querySelectorAll('div[data-bloks-name="ig.components.Icon"]')]
    .filter(d => d.style.maskImage?.includes('circle__outline'));
}

function getSelectBtn() {
  return [...document.querySelectorAll('span[data-bloks-name="bk.components.Text"]')]
    .find(el => el.textContent.trim() === 'Select');
}

function getUnlikeBtnSpan() {
  return [...document.querySelectorAll('span[data-bloks-name="bk.components.TextSpan"]')]
    .find(el => el.textContent.trim() === 'Unlike');
}

function getUnlikeBtnConfirm() {
  return [...document.querySelectorAll('button')]
    .find(el => el.textContent.trim() === 'Unlike');
}

async function runBot() {
  console.log("🤖 Démarrage du bot unlike...");
  let totalUnliked = 0;

  while (true) {
    const cercles = getCercles();

    if (cercles.length === 0) {
      // Scroll et attendre 10 sec que la page recharge
      window.scrollBy(0, 800);
      console.log("⏳ Scroll effectué, attente 10 sec...");
      await sleep(RELOAD_WAIT);

      // Re-clique sur Select
      const selectBtn = getSelectBtn();
      if (selectBtn) {
        selectBtn.click();
        console.log("🔘 Select re-cliqué");
        await sleep(DELAY * 2);
      } else {
        const atBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 300;
        if (atBottom) {
          console.log(`✅ Terminé ! ${totalUnliked} likes supprimés.`);
          break;
        }
      }
      continue;
    }

    // Clique sur tous les cercles visibles
    for (const c of cercles) {
      c.click();
      await sleep(80);
    }
    console.log(`☑️ ${cercles.length} posts sélectionnés`);
    await sleep(DELAY);

    // Clique le bouton Unlike (span rouge)
    const unlikeSpan = getUnlikeBtnSpan();
    if (!unlikeSpan) {
      console.log("⚠️ Bouton Unlike introuvable, on scroll...");
      window.scrollBy(0, 800);
      await sleep(DELAY);
      continue;
    }
    unlikeSpan.click();
    console.log("👆 Unlike cliqué");
    await sleep(DELAY);

    // Confirmation "Sure?" → clique le bouton Unlike (button)
    const confirmBtn = getUnlikeBtnConfirm();
    if (confirmBtn) {
      confirmBtn.click();
      console.log("✅ Confirmation cliquée");
      await sleep(DELAY * 2);
    }

    totalUnliked += cercles.length;
    console.log(`🗑️ ${totalUnliked} likes supprimés au total`);

    // Scroll et attendre que la page se recharge
    window.scrollBy(0, 800);
    console.log("⏳ Attente 10 sec...");
    await sleep(RELOAD_WAIT);

    // Re-clique Select
    const selectBtn = getSelectBtn();
    if (selectBtn) {
      selectBtn.click();
      console.log("🔘 Select re-cliqué");
      await sleep(DELAY * 2);
    }
  }
}

runBot();
