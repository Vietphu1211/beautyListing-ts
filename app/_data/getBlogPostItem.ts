
const getBlogPostItem = [
    {
      id: 1,
      title: "5 Tips for Creating Engaging Blog Content",
      slug:"5-tip-for-creating-engaging-blog-content",
      bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "https://images.unsplash.com/photo-1682685797769-481b48222adf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
        authorName: "John Doe",
      authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      publishedDate: "2022-04-20",
      category:"nail"
    },
    {
      id: 2,
      title: "The Power of Storytelling in Blogging",
      slug:"the-power-of-storytelling-in-blogging",
      bodyText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://images.unsplash.com/photo-1713341087485-a8cf83fdeafb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
      authorName: "Jane Smith",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
      publishedDate: "2022-04-18",
      category:"hair"
    },
    {
        id: 3,
        title: "SEO Strategies for Boosting Blog Traffic",
      slug:"seo-strategies-for-boosting-blog-traffic",        
        bodyText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        img: "https://images.unsplash.com/photo-1712315458167-f04b14f13d17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D",
        authorName: "Alex Johnson",
        authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
        publishedDate: "2022-04-15",
        category:"foot"
    },
    {
        id: 4,
        title: "The Top Types of AI-Generated Content in Marketing",
      slug:"top-types-of-ai-generated-content-in-marketing",        
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "https://images.unsplash.com/photo-1712957412171-e91ae3f5801e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
          authorName: "John Doe",
        authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
        publishedDate: "2022-04-20",
        category:"spa"
      },
      {
        id: 5,
        title: "Learn from My Mistakes: 7 Digital Course Pitfalls to Skip",
      slug:"digital-course-pitfalls",        

        bodyText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://images.unsplash.com/photo-1712839398257-8f7ee9127998?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
        authorName: "Jane Smith",
        authorAvatar: "https://plus.unsplash.com/premium_photo-1669882305300-38b609862bee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
        publishedDate: "2022-04-18",
        category:"hair"
      },
      {
          id: 6,
          title: "How to Use AI For a More Effective Social Media Strategy, According to Ross Simmonds",
          slug:"ai-social-media-strategy",
          bodyText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          img: "https://images.unsplash.com/photo-1713211762276-d30a318b241f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
          authorName: "Alex Johnson",
          authorAvatar: "https://plus.unsplash.com/premium_photo-1675034377239-a839117fe934?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
          publishedDate: "2022-04-15",
          category:"nail"
      },
      {
        id: 7,
        title: "The Rise of Rewatch Podcasts & Nostalgia Bait",
        slug:"the-rise-of-rewatch-podcasts-nostalgia-bait",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        img: "https://images.unsplash.com/photo-1713182025153-c33ae2b6cb3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
          authorName: "John Doe",
        authorAvatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        publishedDate: "2022-04-20",
        category:"make up"
      },
      {
        id: 8,
        title: "100+ Instagram Stats You Need to Know in 2024",
        slug:"100-instagram-stats-you-need-to-know-in-2024",
        bodyText: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "https://images.unsplash.com/photo-1712514496282-6f3a73aff338?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D",
        authorName: "Jane Smith",
        authorAvatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
        publishedDate: "2022-04-18",
        category:"make up"
      },
]
  export default getBlogPostItem;