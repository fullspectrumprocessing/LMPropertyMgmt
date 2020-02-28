export default {
  name: 'slider',
  title: 'Slider',
  type: 'array',
  of: [
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image'
        }
      ]
    }
  ]
}
