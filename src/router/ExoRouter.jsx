/* eslint-disable react/prop-types */
import { constantes, getCurrentPath } from "./consts";
import { useEffect, useState } from "react";
import { match } from "path-to-regexp";
import { Children } from "react";

export function ExoRouter({ children ,routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
    const [currentPath, setCurrentPath] = useState(getCurrentPath)
    useEffect(() => {
      const onLocationChange = () =>{
        setCurrentPath(getCurrentPath)
      }
      window.addEventListener(constantes.NAVIGATION_EVENT_NAME, onLocationChange)
      window.addEventListener('popstate', onLocationChange)
      return () => {
        window.removeEventListener(constantes.NAVIGATION_EVENT_NAME, onLocationChange)
        window.removeEventListener('popstate', onLocationChange)
      };
    }, []);
    let routeParams = {

    }
    const routesFromChildren = Children.map(children, ({ props, type }) => {
      const { name } = type
      const isRoute = name == "Route" || name == "Ju"
      return isRoute ? props : null
    } ).filter(Boolean)

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    const Page = routesToUse.find(({ path }) => {
      if(path == currentPath) return true
      const matcherURL = match(path, {decode: decodeURIComponent})
      const matched = matcherURL(currentPath)
      if (!matched) return false
      routeParams = matched.params
      return true
    })?.Component
    return Page ? <Page routeParams={routeParams}/> 
    : <DefaultComponent />
  }
  