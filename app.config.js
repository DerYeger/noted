export default {
  host:
    process.env.NODE_ENV !== 'production'
      ? 'http://localhost:3000'
      : 'https://noted.yeger.eu',
  name: 'Noted',
  theme: {
    primaryColor: '#212121',
    secondaryColor: '#637949',
  },
}
