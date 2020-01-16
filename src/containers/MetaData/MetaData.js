import React from 'react'
import PropTypes from 'prop-types'

const MetaData = props => {
  const {
    url,
    canonicalUrl,
    image,
    title,
    description,
    card,
    handle,
    type,
    structuredData,
    stock,
    currency,
    site,
    amount,
    noindex,
    nofollow,
    publishedTime,
    modifiedTime,
    section,
    video,
    tag,
    keywords = [],
  } = props

  const robots = [noindex && 'noindex', nofollow && 'nofollow'].filter(x => x).join(', ')

  return (
    <>
      {(url || canonicalUrl) && <link rel="canonical" href={url || canonicalUrl} />}

      {robots && <meta name="robots" content={robots} />}

      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}
      {keywords && <meta name="keywords" content={keywords.join(',')} />}

      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {video && <meta property="og:video" content={video} />}
      {site && <meta property="og:site_name" content={site} />}
      {type && <meta property="og:type" content={type} />}
      {amount && <meta property="og:price:amount" content={amount} />}
      {currency && <meta property="og:price:currency" content={currency} />}

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tag && <meta property="article:tag" content={tag} />}

      {type === 'product' && stock && <meta property="product:availability" content={stock} />}
      {type === 'product' && site && <meta property="product:brand" content={site} />}
      {type === 'product' && amount && <meta property="product:price:amount" content={amount} />}
      {type === 'product' && currency && (
        <meta property="product:price:currency" content={currency} />
      )}

      {card && <meta name="twitter:card" content={card} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {handle && <meta name="twitter:site" content={handle} />}
      {handle && <meta name="twitter:creator" content={handle} />}
      {image && <meta name="twitter:image:src" content={image} />}

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `${JSON.stringify(structuredData)}`,
          }}
        />
      )}
    </>
  )
}

MetaData.propTypes = {
  url: PropTypes.string,
  canonicalUrl: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  video: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.string,
  description: PropTypes.string,
  card: PropTypes.string,
  handle: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.string,
  stock: PropTypes.string,
  currency: PropTypes.string,
  site: PropTypes.string,
  amount: PropTypes.string,
  noindex: PropTypes.string,
  nofollow: PropTypes.string,
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  section: PropTypes.string,
  tag: PropTypes.string,
  keywords: PropTypes.array,
}

export default MetaData
