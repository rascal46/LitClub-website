import { announcements } from '../assets/assets'

function Announcements() {
  return (
    <div>
      <h2 className="text-4xl font-serif text-textcolor mb-12 text-center">
        Announcements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="bg-primary border border-[#3d2f1f] hover:border-textcolor transition-colors"
          >
            <div className="p-6">
              <h3 className="text-xl font-serif text-textcolor mb-3">
                {announcement.title}
              </h3>

              <div className="text-sm text-[#a68f6f] mb-3">
                {announcement.date}
              </div>

              <p className="text-subtext text-sm leading-relaxed">
                {announcement.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Announcements