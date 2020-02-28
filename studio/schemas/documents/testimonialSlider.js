export default {
  name: 'testimonialSlider',
  title: 'Testimonial slider',
  type: 'object',
  fields: [
    {
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
  ]
}
