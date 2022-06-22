// Instanciate your other connectors.
import {UAuthMoralisConnector} from '@uauth/moralis'

export const injected = {}

export const walletconnect = {provider: 'walletconnect'}

UAuthMoralisConnector.setUAuthOptions({
  clientID: process.env.NEXT_PUBLIC_UAUTH_CLIENT_ID,
  redirectUri: process.env.NEXT_PUBLIC_UAUTH_REDIRECT_URI,

  // Scope must include openid and wallet
  scope: "openid wallet email:optional humanity_check:optional",

  // Injected and walletconnect connectors are required
  connectors: {injected, walletconnect},
})

const uauth = {connector: UAuthMoralisConnector}

const Metamask = injected
const WalletConnect = walletconnect
const UnstoppableDomains = uauth

const connectors: Record<string, any> = {
  Metamask,
  WalletConnect,
  UnstoppableDomains,
}

export default connectors