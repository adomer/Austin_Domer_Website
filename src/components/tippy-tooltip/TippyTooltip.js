import Tippy from '@tippyjs/react'
import './tippyTooltip.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/material.css'
import 'tippy.js/animations/scale.css'
import GithubLogo from '../../assets/images/github-mark-white.svg'

export default function TippyTooltip() {
  return (
    <Tippy
      theme="austin"
      animation="scale"
      placement="right"
      arrow={false}
      delay={100}
      content={<span>View the repo!</span>}
    >
      <button variant="outline-success">
        <img
          className="rounded-md h-10 active-scale-110 my-anchor-element flex translate-all ease-in-out hover:shadow-h-card text-white text-sm my-1 py-1 px-3 mr-2 duration-500 hover:bg-[#2C2B2B] transform-gpu active:scale-110 items-center bg-[#4D4B4B]"
          src={GithubLogo}
          alt="Github logo"
        />
      </button>
    </Tippy>
  )
}
