import { useCreateSupplyMutation } from "../../../../redux/api/api";
import Container from "../../../../shared/Container/Container";
import SectionTitle from "../../../../shared/SectionTitle/SectionTitle";

const CreateSupply = () => {
  const [addPost, { isLoading }] = useCreateSupplyMutation();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleCreateSupply = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement; // Cast to HTMLFormElement

    const image = (form.elements.namedItem("image") as HTMLInputElement).value;
    const category = (form.elements.namedItem("category") as HTMLInputElement)
      .value;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const quantity = (form.elements.namedItem("quantity") as HTMLInputElement)
      .value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;

    const newPost = { image, category, title, quantity, description };

    addPost(newPost);
  };

  return (
    <div>
      <Container>
        <SectionTitle heading="Create Your Post" />
        <div className="w-full max-w-2xl mx-auto bg-[#EDF3F5] p-8">
          <form onSubmit={handleCreateSupply} className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Product Image"
              name="image"
              className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
            />
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
            />
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
            />
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
            />

            <textarea
              name="description"
              placeholder="Description"
              rows={5}
              className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
            ></textarea>

            <div className="submit-btn flex justify-center">
              <button type="submit" className="btn-primary-orange w-fit">
                Add Post
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default CreateSupply;
