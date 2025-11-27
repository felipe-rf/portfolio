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
            I'm Felipe, a 20-year-old developer from Brazil, passionate about
            music, video games, and game development. I love technology and
            problem-solving, and have built personal projects using engines like
            Godot. I'm a fast learner with hands-on experience in front-end
            development and DevOps tools, adapting quickly to new technologies
            and delivering efficient, well-structured solutions.
          </p>
          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
            My journey started with game development in 2018. Since then, I've
            expanded my skills to include front-end web development and DevOps
            practices. I'm currently pursuing a degree in Software Engineering,
            which has further enhanced my understanding of software development
            principles and best practices. I also work on independent games as a
            hobby, combining my love for coding and creativity.
          </p>
        </div>
      </div>
    </section>
  );
}
