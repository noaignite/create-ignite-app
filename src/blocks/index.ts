import dynamic from 'next/dynamic'

export const Content = dynamic(() => import(/* webpackChunkName: "blocks/Content" */ './Content')) // prettier-ignore
export const ErrorBlock = dynamic(() => import(/* webpackChunkName: "blocks/ErrorBlock" */ './ErrorBlock')) // prettier-ignore
export const Hero = dynamic(() => import(/* webpackChunkName: "blocks/Hero" */ './Hero')) // prettier-ignore
export const Media = dynamic(() => import(/* webpackChunkName: "blocks/Media" */ './Media')) // prettier-ignore
