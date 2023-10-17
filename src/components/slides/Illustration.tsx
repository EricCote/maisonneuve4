export default function Illustration({
  caption,
  src,
  alt,
  style,
}: {
  caption: string;
  src: string;
  alt: string;
  style: object;
  author: string;
  authorLink: string;
}) {
  return (
    <div className='my-16 mx-0' style={style}>
      <figure className='my-8 flex d-inline-block'>
        <img
          src={src}
          alt={alt}
          style={{ maxHeight: 300 }}
          className='bg-white rounded-lg'
        />
        {caption ? (
          <figcaption className='text-center leading-tight mt-4'>
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
