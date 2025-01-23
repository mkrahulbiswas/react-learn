export const contactForm = async ({ request }: any) => {
  try {
    const response = await request.formData()
    const data = Object.fromEntries(response)
    console.log(data);

    return data
  } catch (error) {
    console.log(error);
  }
}