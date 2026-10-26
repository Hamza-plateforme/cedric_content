import React from 'react'
import ReactDOM from 'react-dom/client'
import Cgv from './Cgv'
import Retractation from './Retractation'
import MentionsLegales from './MentionsLegales'
import './index.css'

// Point d'entrée des pages légales : la page à afficher est indiquée par <body data-page="...">
const PAGES = { cgv: Cgv, retractation: Retractation, mentions: MentionsLegales }
const Page = PAGES[document.body.dataset.page as keyof typeof PAGES] ?? Cgv

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
