import Card from "../components/Card"
import sm2 from "../utils/sm2.jpg"

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Seedhe Maut</h1>

      <div className="mb-12">
        <img
          src={sm2}
          alt="Seedhe Maut performing"
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg mb-6"
        />
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">The Duo</h2>
          <Card>
            <p className="text-lg leading-relaxed mb-4">
              Seedhe Maut, consisting of Encore ABJ and Calm, is a Delhi-based hip-hop duo that has revolutionized the
              Indian rap scene with their authentic storytelling and technical prowess.
            </p>
            <p className="text-lg leading-relaxed">
              Known for their raw lyricism and unfiltered approach to music, they've quickly risen to become one of the
              most respected acts in India's burgeoning hip-hop movement.
            </p>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">Origin Story</h2>
          <Card>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Formed in 2017, Seedhe Maut emerged from the underground rap battles and cyphers of Delhi. Encore ABJ
                and Calm crossed paths in the local hip-hop scene and quickly recognized their complementary styles.
              </p>
              <p className="text-lg leading-relaxed">
                Their name "Seedhe Maut," which roughly translates to "straight death" or "direct kill," reflects their
                no-holds-barred approach to rap and their deadly precision on the mic.
              </p>
              <p className="text-lg leading-relaxed">
                After gaining attention through local performances and online releases, they signed with Azadi Records,
                one of India's premier independent hip-hop labels.
              </p>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">
            Rise to Prominence
          </h2>
          <Card>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                Their debut album "Bayaan" (2019) is widely regarded as a landmark release in Indian hip-hop, showcasing
                their storytelling abilities and technical skills while addressing social issues and personal struggles.
              </p>
              <p className="text-lg leading-relaxed">
                Collaborations with prominent artists like Prabh Deep, Sez On The Beat, and international acts have
                further cemented their position in the scene.
              </p>
              <p className="text-lg leading-relaxed">
                Their distinctive style combines elements of old-school and new-school hip-hop, delivered in a mix of
                Hindi, English, and Punjabi, creating a unique sound that resonates with a diverse audience.
              </p>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-600 dark:text-purple-400">Notable Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2">Bayaan (2019)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Their groundbreaking debut album that established them as forces to be reckoned with in the Indian
                hip-hop scene.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="font-medium">Key Tracks: "Kranti", "Kyu", "Shaktimaan"</p>
              </div>
            </Card>

            <Card className="flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2">न (2021)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A collaborative EP with Sez On The Beat that pushed boundaries with experimental production and
                hard-hitting verses.
              </p>
              <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="font-medium">Key Tracks: "Nanchaku", "Namastute", "Nadaan"</p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
