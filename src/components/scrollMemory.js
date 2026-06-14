const scrollPositions = {};

export function saveScroll(path) {
  console.log("SAVE", path, window.scrollY);        
  scrollPositions[path] = window.scrollY;
}

export function getScroll(path) {
  console.log("GET", path, scrollPositions[path]);
  return scrollPositions[path] ?? 0;
}
