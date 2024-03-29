import { fireEvent, render, screen } from '@testing-library/react';
import CreateProduct from '@/components/Content';

describe('CreateProduct', () => {
  test('inputted Product Name', () => {
    render(CreateProduct);
    const productNameInput = screen.getByPlaceholderText('Product Name');
    const productName = 'Product';
    fireEvent.change(productNameInput, { target: { value: productName } });
    expect(productNameInput).toHaveValue(productName);
    expect(screen.getByText(productName)).toBeInTheDocument();
  });
});

describe('Form Validation', () => {
  test('Product Name not be empty', () => {
    const inputData = {
      productName: '',
      // isian data lainnya
    };
    const result = validateInput(inputData);
    expect(result).toBe(false);
  });
});

