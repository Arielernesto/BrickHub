/* eslint-disable react/prop-types */
import { constantes } from "./consts"


function navigate (href){
    window.history.pushState({}, '', href)
  
    const navigationEvent = new Event(constantes.NAVIGATION_EVENT_NAME)
    window.dispatchEvent(navigationEvent)
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }



export function Link({ target, to, ...props }){
    const handleCLick = (event) =>{
        const isMainEvent = event.button == 0
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target == undefined || target == '_self'
        if (isMainEvent && !isModifiedEvent && isManageableEvent) {
        event.preventDefault()
        navigate(to)
        }
    }
    return <a onClick={handleCLick} href={to} target={target} {...props} />
}
  