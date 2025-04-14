import React from "react"
import Head from "next/head"
import { siteConfig, type SeoProps } from "@/lib/seo-config"

export function SeoMetadata({ title, description, canonical, keywords = [], openGraph, twitter }: SeoProps) {
  // Valores por defecto
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaKeywords = [...siteConfig.keywords, ...keywords].join(", ")
  const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url

  // OpenGraph
  const og = {
    title: openGraph?.title || metaTitle,
    description: openGraph?.description || metaDescription,
    url: openGraph?.url || canonicalUrl,
    siteName: openGraph?.siteName || siteConfig.name,
    images: openGraph?.images || [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: openGraph?.locale || "es_ES",
    type: openGraph?.type || "website",
  }

  // Twitter
  const twt = {
    card: twitter?.card || "summary_large_image",
    site: twitter?.site || siteConfig.links.twitter,
    creator: twitter?.creator || siteConfig.links.twitter,
    title: twitter?.title || metaTitle,
    description: twitter?.description || metaDescription,
    image: twitter?.image || siteConfig.ogImage,
  }

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* OpenGraph */}
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:url" content={og.url} />
      <meta property="og:site_name" content={og.siteName} />
      <meta property="og:locale" content={og.locale} />
      <meta property="og:type" content={og.type} />
      {og.images.map((image, index) => (
        <React.Fragment key={index}>
          <meta property="og:image" content={image.url} />
          {image.width && <meta property="og:image:width" content={image.width.toString()} />}
          {image.height && <meta property="og:image:height" content={image.height.toString()} />}
          {image.alt && <meta property="og:image:alt" content={image.alt} />}
        </React.Fragment>
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content={twt.card} />
      <meta name="twitter:site" content={twt.site} />
      <meta name="twitter:creator" content={twt.creator} />
      <meta name="twitter:title" content={twt.title} />
      <meta name="twitter:description" content={twt.description} />
      <meta name="twitter:image" content={twt.image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
