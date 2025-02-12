import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";
import { Chat } from "@/components/Chat";

export default function Home() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={60}
          radius="sm"
          src="/gen-z.webp"
          width={60}
        />
        <div className="flex flex-col">
          <p className="text-small text-default-500">Try: "How can I say Happy Birthday?",</p>
          <p className="text-small text-default-500">"What does sigma mean?"</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Chat />
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
      <CardFooter>
        <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
