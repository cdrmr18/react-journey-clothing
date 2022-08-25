import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage image={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
