import * as React from 'react'
import PropTypes from 'prop-types'

function Meta(props) {
  const {
    amount,
    canonicalUrl,
    card,
    currency,
    description,
    handle,
    image,
    keywords = [],
    modifiedTime,
    nofollow,
    noindex,
    publishedTime,
    section,
    site,
    stock,
    structuredData,
    tag,
    title,
    type,
    url,
    video,
  } = props

  const robots = [noindex && 'noindex', nofollow && 'nofollow'].filter((x) => x).join(', ')

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
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: `${JSON.stringify(structuredData)}` }}
        />
      )}
    </>
  )
}

Meta.propTypes = {
  amount: PropTypes.string,
  canonicalUrl: PropTypes.string,
  card: PropTypes.string,
  currency: PropTypes.string,
  description: PropTypes.string,
  handle: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  keywords: PropTypes.array,
  modifiedTime: PropTypes.string,
  nofollow: PropTypes.string,
  noindex: PropTypes.string,
  publishedTime: PropTypes.string,
  section: PropTypes.string,
  site: PropTypes.string,
  stock: PropTypes.string,
  structuredData: PropTypes.string,
  tag: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  url: PropTypes.string,
  video: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

export default Meta
