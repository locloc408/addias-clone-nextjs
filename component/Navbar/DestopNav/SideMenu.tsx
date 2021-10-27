import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LinkStyle } from "../navbarStyle";
import { useRouter } from "next/router";
import { SideMenuBadge } from "../navbarStyle";
import { TextField, Autocomplete } from "@mui/material";
import { useState } from "react";
import { matchSorter } from "match-sorter";
interface searchType {
  tag: string;
  sorterTag: string;
}
export const search: searchType[] = [
  {
    tag: "Giày Chạy UltraBoost 21",
    sorterTag: "ultraBoost",
  },
  {
    tag: "Fusio",
    sorterTag: "fusio",
  },
];
export const SideMenu = ({ numberCart }: { numberCart: number }) => {
  const router = useRouter();
  const [searchFieldValue, setSearchFieldvalue] = useState<any>();
  console.log(searchFieldValue);
  interface SearchType {
    tag: string;
    sorterTag: string;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "20px",
          position: "relative",
          right: "40px",
        }}
      >
        <Autocomplete
          disablePortal
          options={search}
          getOptionLabel={(option) => option.tag}
          renderInput={(params) => (
            <TextField
              variant="standard"
              sx={{
                width: "190px",
              }}
              {...params}
              label="Tìm Kiếm"
            />
          )}
          onChange={(e, t: SearchType) => {
            router.push({
              pathname: `/productsList/search/[query]`,
              query: { query: t.sorterTag },
            });
          }}
          isOptionEqualToValue={() => {
            return true;
          }}
        />
        <LinkStyle href="/cart">
          <SideMenuBadge
            sx={{
              ".MuiBadge-badge": {
                backgroundColor: "#e91e63",
                color: "white",
              },
              paddingLeft: "10px",
            }}
            badgeContent={numberCart}
          >
            <ShoppingCartIcon sx={{ color: "black" }} />
          </SideMenuBadge>
        </LinkStyle>
      </div>
    </>
  );
};
