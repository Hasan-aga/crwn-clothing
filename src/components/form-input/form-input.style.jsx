import styled from "styled-components";

const shrinkLabel = `    bottom: 20px;
    font-size: 14px;
    color: #666;
    letter-spacing: 1.5;`;

export const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  position: relative;
  .form-input {
    font-size: 20px;
    border: none;
    border-bottom: 1px solid #444;
    transition: all 200ms;
    &:focus {
      outline: none;
      border-bottom: 5px solid #444;
    }
    &:focus ~ .form-input-label {
      ${shrinkLabel}
    }
  }

  .form-input-label {
    pointer-events: none;
    font-size: 20px;
    color: #555;
    letter-spacing: 0.9;
    text-transform: uppercase;
    position: absolute;
    bottom: -5px;
    transition: all 200ms;

    &.shrink {
      ${shrinkLabel};
    }
  }
`;
// @mixin shrink-label {
//   bottom: 20px;
//   font-size: 14px;
//   color: #666;
//   letter-spacing: 1.5;
// }

// .form-input-group {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   text-align: start;
//   position: relative;
//   .form-input {
//     font-size: 20px;
//     border: none;
//     border-bottom: 1px solid #444;
//     transition: all 200ms;
//     &:focus {
//       outline: none;
//       border-bottom: 5px solid #444;
//     }
//     &:focus ~ .form-input-label {
//       @include shrink-label();
//     }
//   }

//   .form-input-label {
//     pointer-events: none;
//     font-size: 20px;
//     color: #555;
//     letter-spacing: 0.9;
//     text-transform: uppercase;
//     position: absolute;
//     bottom: -5px;
//     transition: all 200ms;

//     &.shrink {
//       @include shrink-label();
//     }
//   }
// }
