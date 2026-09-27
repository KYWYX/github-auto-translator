const DEFAULT_SETTINGS={enabled:true,targetLang:'zh-CN',sourceLang:'auto',viewMode:'translated',providerOrder:['argos','google','mymemory','libre']};
chrome.runtime.onInstalled.addListener(()=>chrome.storage.local.get(['ghTranslatorSettings'],r=>{if(!r.ghTranslatorSettings)chrome.storage.local.set({ghTranslatorSettings:DEFAULT_SETTINGS});}));
