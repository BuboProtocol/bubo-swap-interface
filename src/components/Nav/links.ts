import { NavProps } from '@pancakeswap-libs/uikit'

const links: NavProps['links'] = [
  {
    label: 'Trade',
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    href: 'https://info.bubo.io/#/dashboard/farms'
  },
  {
    label: 'Loans',
    href: 'https://info.bubo.io/#/dashboard/lending'
  },
  {
    label: 'Lottery',
    href: 'https://info.bubo.io/#/dashboard/lottery'
  },
  {
    label: 'Info',
    href: 'https://info.bubo.io'
  }
]

export default links
