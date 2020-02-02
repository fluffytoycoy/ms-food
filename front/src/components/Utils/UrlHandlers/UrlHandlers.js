// Url parser for changing between selection tabs:
// Used on:
// MenuPage
// AboutUsPage
//
export function parseUrl(url){
  let category  = ''
  if(url){
    category = url.replace(/-/g, ' ').toLowerCase();
  }
  return category;
}

// replaces Spaces with - for url slugs
// Used on:
// AboutUsPage
//
export function createUrlSlug(url){
  return url.replace(/\s/g,'-');
}
