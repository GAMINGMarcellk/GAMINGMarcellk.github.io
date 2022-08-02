/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "brave"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  brave: "https://search.brave.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"PCsG7KSTklnJn1Kn","label":"Minden napi dolgok","bookmarks":[{"id":"nOvZgDHM98qoyAjn","label":"Email","url":"https://box.astolfo.email/mail/"},{"id":"6RwXU7STLNNCo61O","label":"Discord","url":"https://discord.com/login"},{"id":"2ycsJeOnKK9i6XEU","label":"Youtube","url":"https://youtube.com"}]},{"id":"Pg0G5b89OKCRXlXP","label":"fontos dolgok","bookmarks":[{"id":"8wZgABCr4zQFSmCC","label":"Weboldalak","url":"https://app.infinityfree.net"},{"id":"9Kg7goulxWorVCCM","label":"Github","url":"https://github.com/"},{"id":"vWwauszhR0zCj8xi","label":"","url":"about:"},{"id":"93pAUAGpWeGdrepR","label":"","url":"about:"}]},{"id":"jjSt1sgZsfKXVR8G","label":"Böngésző játékok","bookmarks":[{"id":"y6eJu00Utnn4id4P","label":"krunker","url":"https://krunker.io"},{"id":"cZXEazEaNtxr0ddB","label":"Venge","url":"https://venge.io"},{"id":"ExTScgRPhhxVm569","label":"POLYBLICKY","url":"https://www.gaming-style.com/POLYBLICY/index.php?page=game"}]},{"id":"zq4UhlpM2LXLVkrs","label":"Képes dolgok","bookmarks":[{"id":"j489Vlpn9sO8s4IL","label":"icons","url":"https://feathericons.com/"},{"id":"KFbkD6fx0hnvw3wi","label":"gif","url":"https://https://giphy.com/"},{"id":"RRAGKLdzJ0KTuZ51","label":"Pinterest","url":"https://www.pinterest.com/"},{"id":"0iTJgwA9OIGppHmn","label":"","url":"about:"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
