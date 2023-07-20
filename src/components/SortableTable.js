import Table from "./Table";

function SortableTable(props) {
    const { config } = props;

    const updateConfig = config.map((column) => {
        if (!column.sortValue) return;
        return {
            ...column,
            header: () => <th>{column.label} IS SORTABLE</th>
        }
    });

    return (
        <Table {...props} config={updateConfig} />
    );
}

export default SortableTable;