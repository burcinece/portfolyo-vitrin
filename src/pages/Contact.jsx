import { useForm } from 'react-hook-form'
import { socialLinks } from '../data/socialLinks'
import BackgroundGlow from '../components/BackgroundGlow'

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm()

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 600))
    reset()
  }

  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-24">
      <BackgroundGlow />

      <div className="relative mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500">
            İletişim
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-200">
            Birlikte çalışalım
          </h1>
          <p className="mt-4 max-w-sm text-zinc-400">
            Bir proje fikrin mi var, yoksa sadece merhaba mı demek istiyorsun?
            Formu doldur, en kısa sürede dönüş yapayım.
          </p>

          <div className="mt-8 flex gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 text-zinc-400 transition-colors duration-200 hover:border-zinc-700 hover:text-zinc-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-zinc-800 p-8">
          {isSubmitSuccessful ? (
            <p className="text-sm text-zinc-400">
              Mesajın için teşekkürler, en kısa sürede dönüş yapacağım.
            </p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-zinc-400">
                  İsim
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'İsim alanı zorunlu.' })}
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                  placeholder="Adın Soyadın"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-zinc-400">
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'E-posta alanı zorunlu.',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Geçerli bir e-posta adresi gir.',
                    },
                  })}
                  className="w-full rounded-md border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                  placeholder="ornek@eposta.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-zinc-400">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { required: 'Mesaj alanı zorunlu.' })}
                  className="w-full resize-none rounded-md border border-zinc-800 bg-zinc-950 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
                  placeholder="Projenden bahset..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-zinc-100 py-3 text-sm font-medium text-zinc-950 transition-colors duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
