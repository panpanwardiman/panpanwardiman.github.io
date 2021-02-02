const bodyEl = document.getElementsByTagName('html')[0]

const openNav = () => {
  const nav = document.querySelector(".mobile-menu-wrapper")
  nav.classList.add("open")
}
const closeNav = () => {
  const nav = document.querySelector(".mobile-menu-wrapper")
  nav.classList.remove("open")
}

const LOCAL_STORAGE_KEY = 'user-theme-scheme'
const THEME_KEY = '--code-mode'
const modeToggleButton = document.querySelectorAll('#btn-dark-mode')

/**
 * getCodeModeProp untuk mencari value property --code-mode di document root element 
 * atau tag html 
 */
const getCodeModeProp = (propKey) => {
    let codeMode = getComputedStyle(document.documentElement).getPropertyValue(propKey)
    if (codeMode.length) {
        codeMode = codeMode.replace(/\'|"/g, '').trim()
    }
    return codeMode
}

/**
 * 
 * @param {*} mode 
 */
const modeSetting = mode => {
    let currentSetting = mode || localStorage.getItem(LOCAL_STORAGE_KEY)
    if (currentSetting) {
      document.documentElement.setAttribute('data-theme', currentSetting)
    }
}

const toggleSetting = () => {
  let currentSetting = localStorage.getItem(LOCAL_STORAGE_KEY);
  
  switch(currentSetting) {
    case null:
      currentSetting = getCodeModeProp(THEME_KEY) === 'dark' ? 'light' : 'dark';
      break;
    case 'light':
      currentSetting = 'dark';
      break;
    case 'dark':
      currentSetting = 'light';
      break;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, currentSetting);
  
  return currentSetting;
}

modeToggleButton.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault()
    modeSetting(toggleSetting())
  })
})

modeSetting();


