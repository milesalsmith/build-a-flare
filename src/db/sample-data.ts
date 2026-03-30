const sampleData = {
  products: [
    {
      name: 'Bot Management Enterprise',
      slug: 'bot-management-enterprise',
      category: 'Layer 7 Security',
      description: 'Advanced behavioral analysis to protect your web traffic against malicious bots and automated attacks.',
      images: [
        '/images/sample-products/p1-1.png'
      ],
      price: 299.99,
      brand: 'Cloudflare',
      rating: 4.9,
      numReviews: 42,
      stock: 50,
      isFeatured: true,
      banner: 'banner-1.jpg',
    },
    {
      name: 'WAF Managed Ruleset',
      slug: 'waf-managed-ruleset',
      category: 'Layer 7 Security',
      description: 'Plug-and-play security rules to defend against SQL injection, XSS, and zero-day vulnerabilities.',
      images: [
        '/images/sample-products/p2-1.png'
      ],
      price: 19.99,
      brand: 'Cloudflare',
      rating: 4.7,
      numReviews: 156,
      stock: 100,
      isFeatured: true,
      banner: 'banner-2.jpg',
    },
    {
      name: 'Workers KV Storage (1GB)',
      slug: 'workers-kv-storage-1gb',
      category: 'Serverless',
      description: 'Global, low-latency, key-value data store for your serverless applications at the edge.',
      images: [
        '/images/sample-products/p3-1.png'
      ],
      price: 5.00,
      brand: 'Cloudflare',
      rating: 4.8,
      numReviews: 89,
      stock: 0, // Testing "Out of Stock" state
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Zero Trust Tunnel Key',
      slug: 'zero-trust-tunnel-key',
      category: 'Zero Trust',
      description: 'Securely connect your origin server to the Cloudflare network without opening public ports.',
      images: [
        '/images/sample-products/p4-1.png'
      ],
      price: 0.00, 
      brand: 'Build-a-Flare',
      rating: 4.9,
      numReviews: 210,
      stock: 1000,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'R2 Object Storage (100GB)',
      slug: 'r2-object-storage-100gb',
      category: 'Storage',
      description: 'S3-compatible object storage with zero egress fees and high durability.',
      images: [
        '/images/sample-products/p5-1.png'
      ],
      price: 15.00,
      brand: 'Cloudflare',
      rating: 4.6,
      numReviews: 34,
      stock: 25,
      isFeatured: false,
      banner: null,
    },
    {
      name: 'Advanced Load Balancer',
      slug: 'advanced-load-balancer',
      category: 'Network',
      description: 'Steer traffic away from unhealthy origins and optimize performance with global steering.',
      images: [
        '/images/sample-products/p6-1.png'
      ],
      price: 50.00,
      brand: 'Build-a-Flare',
      rating: 4.5,
      numReviews: 12,
      stock: 8,
      isFeatured: true,
      banner: null,
    },
  ],
};

export default sampleData;