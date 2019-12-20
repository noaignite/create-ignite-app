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
  } = props

  const robots = [noindex && 'noindex', nofollow && 'nofollow'].filter(x => x).join(', ')

  return (
    <>
      {(url || canonicalUrl) && <link rel="canonical" href={url || canonicalUrl} />}

      {robots && <meta name="robots" content={robots} />}

      {description && <meta name="description" content={description} />}
      {image && <meta name="image" content={image} />}

      {url && <meta property="og:url" content={url} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {site && <meta property="og:site_name" content={site} />}
      {type && <meta property="og:type" content={type} />}

      {card && <meta name="twitter:card" content={card} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {handle && <meta name="twitter:site" content={handle} />}
      {handle && <meta name="twitter:creator" content={handle} />}
      {image && <meta name="twitter:image:src" content={image} />}

      {type === 'product' && stock && <meta name="product:availability" content={stock} />}
      {type === 'product' && currency && <meta name="product:price:currency" content={currency} />}
      {type === 'product' && amount && <meta name="product:price:amount" content={amount} />}
      {type === 'product' && site && <meta name="product:brand" content={site} />}

      {title && <meta itemProp="name" content={title} />}
      {description && <meta itemProp="description" content={description} />}
      {image && <meta itemProp="image" content={image} />}
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
}

export default MetaData
