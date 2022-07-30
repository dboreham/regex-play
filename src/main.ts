
export const linkReplacer = (link: string) => {
    const matcher = new RegExp('^(\./|\.\./|/)(.*?)(.md)(\#.*?)?$')
    if (matcher.test(link)) {
      const newLink = link.replace(matcher, "$1$2$4") 
      // console.log(`Translated ${link} into ${newLink}`)
      return newLink
    } else {
      return link
    }
}
