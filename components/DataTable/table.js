import { Table, User } from '@nextui-org/react';

function itemNameToMinecraftName(itemName) {
  // Filter out custom items
  let item = itemName.split('#')[0];

  // Convert to Minecraft name
  // Find the all capital letters after the first and add an underscore before it
  // Then convert to lowercase
  item = item.replace(/([A-Z])/g, (match, letter, index) => {
    if (index !== 0) {
      return '_' + letter;
    }
    return letter;
  }).toLowerCase();

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
        aria-label='DataTable'
        selectionMode="single"
        css={{
          height: 'auto',
          width: '80vw'
        }}
      >
        <Table.Header>
          <Table.Column
            allowsSorting
            css={{
              fontSize: '1rem',
            }}
          >
            Name
          </Table.Column>
          <Table.Column
            allowsSorting
            css={{
              fontSize: '1rem',
            }}
          >
            Updated
          </Table.Column>
          <Table.Column
            allowsSorting
            css={{
              fontSize: '1rem',
            }}
          >
            Location
          </Table.Column>
          <Table.Column
            allowsSorting
            css={{
              fontSize: '1rem',
            }}
          >
            Buy Price Per Unit
          </Table.Column>
          <Table.Column
            allowsSorting
            css={{
              fontSize: '1rem',
            }}
          >
            Sell Price Per Unit
          </Table.Column>
        </Table.Header>
        <Table.Body>
          {filteredItems.map((item) => (
            <Table.Row key={item.location}>
              <Table.Cell><User squared bordered src={iconURL(item.item_name)} name={item.item_name} /></Table.Cell>
              <Table.Cell>{new Intl.DateTimeFormat('en-US').format(new Date(item.created_at * 1e3))}</Table.Cell>
              <Table.Cell>{item.location}</Table.Cell>
              <Table.Cell>{formatCurrency(item.buy_price_per_unit)}</Table.Cell>
              <Table.Cell>{formatCurrency(item.sell_price_per_unit)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={9}
        />
      </Table>
    </div>
  );
}