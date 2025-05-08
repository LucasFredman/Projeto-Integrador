export default function MainCard() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">O melhor café da cidade</h2>
      <p className="mb-6">
        Na Cafeteria Delícia, você encontra cafés especiais, ambiente acolhedor e atendimento de qualidade. Venha nos visitar e tenha uma experiência única!
      </p>
      <a
        href="#fazer-pedido"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow transition transform duration-300 hover:bg-blue-700 hover:scale-105"
      >
        Fazer Pedido
      </a>
    </div>
  )
}
