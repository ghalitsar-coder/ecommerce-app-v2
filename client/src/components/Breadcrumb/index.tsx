import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

type Props = {
  title?: string;
};

const BreadCrumb = ({
  title = "VGA CARD POWERCOLOR RX 6750 XT RED DEVIL 12GB DDR6 Radeon 6750XT",
}: Props) => {
  return (
    <Breadcrumb spacing="8px" separator={<BiChevronRight color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink className="!text-orange-400 !text-sm" href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink className="!text-orange-400 !text-sm" href="#">
          About
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink className="!text-orange-400 !text-sm" href="#">
          Contact
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink className="!text-orange-400 !text-sm" href="#">
          {title.substring(0, 21)}...
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default BreadCrumb;
