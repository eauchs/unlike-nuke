// Instagram Mass Unlike Bot - VERSION CORRIGÉE FR/EN
// 1. Va sur instagram.com/your_activity/interactions/likes/
// 2. Clique sur "Select" / "Sélectionner" en haut à droite UNE FOIS
// 3. F12 → Console → colle ce script → Entrée

const DELAY = 800;
const RELOAD_WAIT = 10000;

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

function getCercles() {
  return [...document.querySelectorAll('div[data-bloks-name="ig.components.Icon"]')]
    .filter(d => d.style.maskImage?.includes('circle__outline'));
}

function getSelectBtn() {
  return [...document.querySelectorAll('span[data-bloks-name="bk.components.Text"]')]
    .find(el => ['Select', 'Sélectionner'].includes(el.textContent.trim()));
}

function getUnlikeBtnSpan() {
  // Cherche EN + FR dans les TextSpan
  return [...document.querySelectorAll('span[data-bloks-name="bk.components.TextSpan"]')]
    .find(el => {
      const t = el.textContent.trim().toLowerCase();
      return t === 'unlike' || t.includes('annuler la mention');
    });
}

function getUnlikeBtnFallback() {
  // Fallback : cherche dans TOUS les spans visibles (le texte rouge en bas)
  return [...document.querySelectorAll('span')]
    .find(el => {
      const t = el.textContent.trim().toLowerCase();
      return (t === 'unlike' || t.includes('annuler la mention') || t.includes('annuler')) 
             && el.offsetParent !== null; // visible uniquement
    });
}

function getUnlikeBtnConfirm() {
  // Confirmation popup : cherche EN + FR
  return [...document.querySelectorAll('button')]
    .find(el => {
      const t = el.textContent.trim().toLowerCase();
      return t === 'unlike' || t.includes('annuler') || t === 'supprimer';
    });
}

async function runBot() {
  console.log("🤖 Démarrage du bot unlike...");
  let totalUnliked = 0;

  while (true) {
    const cercles = getCercles();

    if (cercles.length === 0) {
      window.scrollBy(0, 800);
      console.log("⏳ Scroll effectué, attente 10 sec...");
      await sleep(RELOAD_WAIT);

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

    // Clique le bouton Unlike / Annuler la mention J'aime
    let unlikeBtn = getUnlikeBtnSpan() || getUnlikeBtnFallback();
    if (!unlikeBtn) {
      console.log("⚠️ Bouton Unlike/Annuler introuvable, on scroll...");
      window.scrollBy(0, 800);
      await sleep(DELAY);
      continue;
    }
    unlikeBtn.click();
    console.log("👆 Unlike / Annuler cliqué");
    await sleep(DELAY);

    // Confirmation popup
    const confirmBtn = getUnlikeBtnConfirm();
    if (confirmBtn) {
      confirmBtn.click();
      console.log("✅ Confirmation cliquée");
      await sleep(DELAY * 2);
    }

    totalUnliked += cercles.length;
    console.log(`🗑️ ${totalUnliked} likes supprimés au total`);

    window.scrollBy(0, 800);
    console.log("⏳ Attente 10 sec...");
    await sleep(RELOAD_WAIT);

    const selectBtn = getSelectBtn();
    if (selectBtn) {
      selectBtn.click();
      console.log("🔘 Select re-cliqué");
      await sleep(DELAY * 2);
    }
  }
}

runBot();
