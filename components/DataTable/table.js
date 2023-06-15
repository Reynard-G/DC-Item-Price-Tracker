import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User } from '@nextui-org/react';

function itemNameToMinecraftName(itemName) {
  // Filter out custom items
  let item = itemName.split('#')[0];
  item = item.split(':')[0];

  // Convert to Minecraft name
  // Find the all capital letters after the first and add an underscore before it
  // Then convert to lowercase
  item = item.replace(/([A-Z])/g, (match, letter, index) => {
    if (index !== 0) {
      return '_' + letter;
    }
    return letter;
  }).toLowerCase();

  // If there is a number, add an underscore before it once
  item = item.replace(/(\D*)(\d+)/, '$1_$2');

  if (item === "elytra:_431") console.log(itemName)

  return item;
}

function iconURL(itemName) {
  const baseURL = "https://mc.nerothe.com/img/1.20.1/";
  const imageType = ".png";
  const minecraftName = itemNameToMinecraftName(itemName);

  return baseURL + minecraftName + imageType;
}

function formatCurrency(value) {
  if (value === null || value === undefined) {
    return '-'; // Return a specific string when the input is null or undefined
  }

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return currencyFormatter.format(value);
}

export default function DataTable({ items, searchTerm, handleSearchChange }) {
  const filteredItems = items.filter((item) => {
    return item.item_name.toLowerCase().includes(searchTerm.toLowerCase());
  });


  return (
    <div className="mt-8">
      <Table
        bordered
        fixed
        aria-label='DataTable'
        selectionMode="single"
        css={{
          height: 'auto',
          width: '80vw'
        }}
      >
        <TableHeader>
          <TableColumn
            allowsSorting
            width="100%"
            css={{
              fontSize: '1rem',
            }}
          >
            Name
          </TableColumn>
          <TableColumn
            allowsSorting
            width="100%"
            css={{
              fontSize: '1rem',
            }}
          >
            Updated
          </TableColumn>
          <TableColumn
            allowsSorting
            width="100%"
            css={{
              fontSize: '1rem',
            }}
          >
            Location
          </TableColumn>
          <TableColumn
            allowsSorting
            width="100%"
            css={{
              fontSize: '1rem',
            }}
          >
            Buy Price Per Unit
          </TableColumn>
          <TableColumn
            allowsSorting
            width="100%"
            css={{
              fontSize: '1rem',
            }}
          >
            Sell Price Per Unit
          </TableColumn>
        </TableHeader>
        <TableBody>
          {filteredItems.map((item) => (
            <TableRow key={item.location}>
              <TableCell>
                <User
                  name={item.item_name}
                  avatarProps={{
                    src: iconURL(item.item_name)
                  }}
                />
              </TableCell>
              <TableCell>
                {new Intl.DateTimeFormat('en-US').format(new Date(item.created_at * 1e3))}
              </TableCell>
              <TableCell>
                {item.location}
              </TableCell>
              <TableCell>
                {formatCurrency(item.buy_price_per_unit)}
              </TableCell>
              <TableCell>
                {formatCurrency(item.sell_price_per_unit)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/*<Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={9}
          onPageChange={(page) => console.log({ page })}
          />*/}
      </Table>
    </div>
  );
}