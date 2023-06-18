import { useMemo } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';
import { CardHeader } from '@mui/material';

function itemNameToMinecraftName(itemName) {
  // Filter out custom items
  let item = itemName.split('#')[0];
  item = item.split(':')[0];

  // Convert to Minecraft name
  // Find all capital letters after the first and add an underscore before them
  // Then convert to lowercase
  item = item.replace(/([A-Z])/g, (match, letter, index) => {
    if (index !== 0) {
      return '_' + letter;
    }
    return letter;
  }).toLowerCase();

  // Add an underscore before the first number
  item = item.replace(/(\D*)(\d+)/, '$1_$2');

  return item;
}

function iconURL(itemName) {
  const baseURL = "/items/";
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

export default function Datatable({ items, searchTerm, handleSearchChange }) {
  const itemBodyTemplate = (rowData) => {
    return (
      <CardHeader
        className='p-card-title'
        avatar={
          <Avatar
            image={iconURL(rowData.item_name)}
            size="large"
            alt={rowData.item_name}
          />
        }
        title={rowData.item_name}
      />
    );
  };

  const createdBodyTemplate = (rowData) => {
    return new Intl.DateTimeFormat('en-US').format(new Date(rowData.created_at * 1e3));
  };

  const buyPriceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.buy_price_per_unit);
  };

  const sellPriceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.sell_price_per_unit);
  };

  console.time('Search Time');
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      return item.item_name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [items, searchTerm]);
  console.timeEnd('Search Time');

  return (
    <div className="mt-8">
      <DataTable
        value={filteredItems}
        scrollable
        scrollHeight="60vh"
        stripedRows
        emptyMessage="No items found"
        sortField='item_name'
        sortOrder={1}
        removableSort
        style={{ width: '80vw' }}
      >
        <Column
          field="item_name"
          header="Name"
          sortable
          style={{ minWidth: '20%' }}
          body={itemBodyTemplate}
        />
        <Column
          field="created_at"
          header="Updated"
          sortable
          style={{ minWidth: '20%' }}
          body={createdBodyTemplate}
        />
        <Column
          field="location"
          header="Location"
          sortable
          style={{ minWidth: '20%' }}
        />
        <Column
          field="buy_price_per_unit"
          header="Buy Price Per Unit"
          sortable
          style={{ minWidth: '20%' }}
          body={buyPriceBodyTemplate}
        />
        <Column
          field="sell_price_per_unit"
          header="Sell Price Per Unit"
          sortable
          style={{ minWidth: '20%' }}
          body={sellPriceBodyTemplate}
        />
      </DataTable>
    </div>
  );
}
