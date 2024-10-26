export const siteConfig = {
  name: "Incredible India",
  logo: "/inner_logo.png",
  url: "https://ui.shadcn.com",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
  navLinks: [
    {
      label: "Destinations",
      url: "/destinations",
      children: [
        {
          label: "North India",
          url: "/north-india",
          children: [
            {
              label: "Chandigarh",
              url: "/chandigarh",
              children: [],
            },
            {
              label: "Delhi",
              url: "/delhi",
              children: [],
            },
            {
              label: "Haryana",
              url: "/haryana",
              children: [],
            },
          ],
        },
        {
          label: "North East India",
          url: "/northeast-india",
          children: [
            {
              label: "Arunachal Pradesh",
              url: "/ap",
              children: [],
            },
            {
              label: "Assam",
              url: "/assam",
              children: [],
            },
            {
              label: "Manipur",
              url: "/manipur",
              children: [],
            },
          ],
        },
        {
          label: "East India",
          url: "/east-india",
          children: [
            {
              label: "Andaman Nicobar Islands",
              url: "/andaman",
              children: [],
            },
            {
              label: "Bihar",
              url: "/bihar",
              children: [],
            },
            {
              label: "Jharkhand",
              url: "/jharkhand",
              children: [],
            },
          ],
        },
        {
          label: "Central India",
          url: "/central-india",
          children: [
            {
              label: "Chattisgarh",
              url: "/chattisgarh",
              children: [],
            },
            {
              label: "Madhya Pradesh",
              url: "/mp",
              children: [],
            },
          ],
        },
        {
          label: "West India",
          url: "/west-india",
          children: [
            {
              label: "Dadra and Nagar Haveli",
              url: "/dadra",
              children: [],
            },
            {
              label: "Goa",
              url: "/goa",
              children: [],
            },
            {
              label: "Gujarat",
              url: "/gujarat",
              children: [],
            },
            {
              label: "Maharashtra",
              url: "/maharashtra",
              children: [],
            },
          ],
        },
        {
          label: "South India",
          url: "/south-india",
          children: [
            {
              label: "Andhra Pradesh",
              url: "/andhra",
              children: [],
            },
            {
              label: "Karnataka",
              url: "/karnataka",
              children: [],
            },
            {
              label: "Kerala",
              url: "/kerala",
              children: [],
            },
            {
              label: "Lakshadweep",
              url: "/lakshadweep",
              children: [],
            },
          ],
        },
      ],
    },
    {
      label: "Holiday Ideas",
      url: "/holiday-ideas",
      children: [],
    },
    {
      label: "Packages",
      url: "/packages",
      children: [],
    },
    {
      label: "Places to stay",
      url: "/places-to-stay",
      children: [],
    },
    {
      label: "Weekend Gateways",
      url: "/weekend-gateways",
      children: [],
    },
    {
      label: "Destination Weddings",
      url: "/weddings",
      children: [],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
