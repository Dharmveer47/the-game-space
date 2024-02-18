'use client';
type Props = {
  des: string;
  className?: string;
};

const TF2Description = ({ des, className }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: des }} className={className} />;
};

export default TF2Description;
