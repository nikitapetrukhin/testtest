
const Link = ( {href, children} ) => { 
  return (
    <a href={href} className='.ui-link'>{children}</a>
  )
}

export default Link