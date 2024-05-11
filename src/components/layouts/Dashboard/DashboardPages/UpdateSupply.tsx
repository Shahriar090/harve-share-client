import { useParams } from "react-router-dom";
import { FormEvent } from "react";
import {
  useGetSinglePostQuery,
  useUpdatePostMutation,
} from "../../../../redux/api/api";

const UpdateSupply = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSinglePostQuery(id);
  // update mutation hook
  const [updatePost, { isError }] = useUpdatePostMutation();
  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }
  const { _id, image, title, category, description, quantity } = data;
  // console.log(_id);

  const handleUpdateSupply = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;

    const image = (form.elements.namedItem("image") as HTMLInputElement).value;
    const category = (form.elements.namedItem("category") as HTMLInputElement)
      .value;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const quantity = (form.elements.namedItem("quantity") as HTMLInputElement)
      .value;
    const description = (
      form.elements.namedItem("description") as HTMLInputElement
    ).value;

    const updatedPost = {
      id: _id,
      data: { image, category, title, quantity, description },
    };
    updatePost(updatedPost);
  };

  return (
    <div>
      <form onSubmit={handleUpdateSupply} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Product Image"
          name="image"
          defaultValue={image}
          className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
        />
        <input
          type="text"
          placeholder="Category"
          defaultValue={category}
          name="category"
          className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
        />
        <input
          type="text"
          placeholder="Title"
          defaultValue={title}
          name="title"
          className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
        />
        <input
          type="number"
          placeholder="Quantity"
          defaultValue={quantity}
          name="quantity"
          className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
        />

        <textarea
          name="description"
          placeholder="Description"
          defaultValue={description}
          rows={5}
          className="border w-full py-5 px-5 focus:outline-none focus:border-orange-500"
        ></textarea>

        <div className="submit-btn flex justify-center">
          <button type="submit" className="btn-primary-orange w-fit">
            Update post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateSupply;
