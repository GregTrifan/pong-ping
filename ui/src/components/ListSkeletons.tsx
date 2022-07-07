import { Skeleton } from "@mantine/core";

interface ListSkeletonsProps {
  n: number;
}
const ListSkeletons = ({ n }: ListSkeletonsProps) => {
  return (
    <div>
      {Array.apply(0, Array(n)).map((x, i) => (
        <Skeleton height={10} my={3} radius="xl" key={i} />
      ))}
    </div>
  );
};

export default ListSkeletons;
