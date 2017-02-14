/**
 * This example folder is used to test the functionality of DocItemLoader and API reference resolution. 
 */
declare const packageDescription: void;

export {
    inheritLocalOptionOne,
    inheritLocalOptionTwo,
    inheritLocalOptionThreeFunction,
    inheritEnumValues,
    sourceEnumValuesDoc,
    inheritLocalCircularDependencyOne,
    inheritLocalCircularDependencyTwo,
    jsonResolutionFunction,
    jsonResolutionClass,
    IStructuredTypeInherit,
    IStructuredTypeSource
} from './folder/MyClass';
export { default as MyClass } from './folder/MyClass';