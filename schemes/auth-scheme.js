import { LocalScheme } from '~auth/runtime'

export default class CustomScheme extends LocalScheme {
 async fetchUser(endpoint) {
  if (!this.check().valid) {
   return
  }

  if (!this.options.endpoints.user) {
   this.$auth.setUser({})
   return
  }

  return this.$auth.requestWith(
   this.name,
   endpoint,
   this.options.endpoints.user
  ).then((response) => {
   const user = getProp(response.data, this.options.user.property)

   const customUser = {
    ...user,
    fullName: user.firstName + ' ' + user.lastName,
    roles: ['user']
   }

   this.$auth.setUser(customUser)

   return response
  }).catch((error) => {
   this.$auth.callOnError(error, { method: 'fetchUser' })
  })
 }
}