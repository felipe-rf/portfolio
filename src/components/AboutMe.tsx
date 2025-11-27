export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative flex items-center justify-center px-6 py-30 "
    >
      <div className="flex flex-col max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center">About Me</h2>
        <div className="bg-gray-300/10 backdrop-blur-sm rounded-3xl p-12 flex flex-col items-center text-center gap-6">
          <p className="text-xl text-gray-200 leading-relaxed mb-6 max-w-3xl">
            Sou apaixonado por criar experiências digitais que combinam
            funcionalidade e estética. Com formação em Engenharia de Software,
            trabalho na interseção entre código, design e jogos.
          </p>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
            Minha jornada começou com desenvolvimento web, expandiu para design
            de interfaces e, mais recentemente, mergulhei no mundo do
            desenvolvimento de jogos. Acredito que essas três áreas se
            complementam perfeitamente para criar produtos incríveis.
          </p>
        </div>
      </div>
    </section>
  );
}
