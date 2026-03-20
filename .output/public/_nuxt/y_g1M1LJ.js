import{ao as $,ap as C,aq as j,ar as X,as as H,at as G,au as S,av as o,aw as O,ax as Z,ay as M}from"./Di9ftBiL.js";function ee(n){return typeof n=="object"&&n!==null}function te(n,e){if(!!!n)throw new Error("Unexpected invariant triggered.")}const ne=/\r\n|[\n\r]/g;function L(n,e){let t=0,i=1;for(const s of n.body.matchAll(ne)){if(typeof s.index=="number"||te(!1),s.index>=e)break;t=s.index+s[0].length,i+=1}return{line:i,column:e+1-t}}function se(n){return Y(n.source,L(n.source,n.start))}function Y(n,e){const t=n.locationOffset.column-1,i="".padStart(t)+n.body,s=e.line-1,r=n.locationOffset.line-1,c=e.line+r,h=e.line===1?t:0,d=e.column+h,E=`${n.name}:${c}:${d}
`,l=i.split(/\r\n|[\n\r]/g),N=l[s];if(N.length>120){const x=Math.floor(d/80),b=d%80,f=[];for(let A=0;A<N.length;A+=80)f.push(N.slice(A,A+80));return E+U([[`${c} |`,f[0]],...f.slice(1,x+1).map(A=>["|",A]),["|","^".padStart(b)],["|",f[x+1]]])}return E+U([[`${c-1} |`,l[s-1]],[`${c} |`,N],["|","^".padStart(d)],[`${c+1} |`,l[s+1]]])}function U(n){const e=n.filter(([i,s])=>s!==void 0),t=Math.max(...e.map(([i])=>i.length));return e.map(([i,s])=>i.padStart(t)+(s?" "+s:"")).join(`
`)}function ie(n){const e=n[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:n[1],positions:n[2],path:n[3],originalError:n[4],extensions:n[5]}:e}class P extends Error{constructor(e,...t){var i,s,r;const{nodes:c,source:h,positions:d,path:E,originalError:l,extensions:N}=ie(t);super(e),this.name="GraphQLError",this.path=E??void 0,this.originalError=l??void 0,this.nodes=B(Array.isArray(c)?c:c?[c]:void 0);const x=B((i=this.nodes)===null||i===void 0?void 0:i.map(f=>f.loc).filter(f=>f!=null));this.source=h??(x==null||(s=x[0])===null||s===void 0?void 0:s.source),this.positions=d??x?.map(f=>f.start),this.locations=d&&h?d.map(f=>L(h,f)):x?.map(f=>L(f.source,f.start));const b=ee(l?.extensions)?l?.extensions:void 0;this.extensions=(r=N??b)!==null&&r!==void 0?r:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),l!=null&&l.stack?Object.defineProperty(this,"stack",{value:l.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,P):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const t of this.nodes)t.loc&&(e+=`

`+se(t.loc));else if(this.source&&this.locations)for(const t of this.locations)e+=`

`+Y(this.source,t);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function B(n){return n===void 0||n.length===0?void 0:n}function p(n,e,t){return new P(`Syntax Error: ${t}`,{source:n,positions:[e]})}var w;(function(n){n.QUERY="QUERY",n.MUTATION="MUTATION",n.SUBSCRIPTION="SUBSCRIPTION",n.FIELD="FIELD",n.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",n.FRAGMENT_SPREAD="FRAGMENT_SPREAD",n.INLINE_FRAGMENT="INLINE_FRAGMENT",n.VARIABLE_DEFINITION="VARIABLE_DEFINITION",n.SCHEMA="SCHEMA",n.SCALAR="SCALAR",n.OBJECT="OBJECT",n.FIELD_DEFINITION="FIELD_DEFINITION",n.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",n.INTERFACE="INTERFACE",n.UNION="UNION",n.ENUM="ENUM",n.ENUM_VALUE="ENUM_VALUE",n.INPUT_OBJECT="INPUT_OBJECT",n.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(w||(w={}));var a;(function(n){n.SOF="<SOF>",n.EOF="<EOF>",n.BANG="!",n.DOLLAR="$",n.AMP="&",n.PAREN_L="(",n.PAREN_R=")",n.DOT=".",n.SPREAD="...",n.COLON=":",n.EQUALS="=",n.AT="@",n.BRACKET_L="[",n.BRACKET_R="]",n.BRACE_L="{",n.PIPE="|",n.BRACE_R="}",n.NAME="Name",n.INT="Int",n.FLOAT="Float",n.STRING="String",n.BLOCK_STRING="BlockString",n.COMMENT="Comment"})(a||(a={}));class re{constructor(e){const t=new $(a.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==a.EOF)do if(e.next)e=e.next;else{const t=oe(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===a.COMMENT);return e}}function ae(n){return n===a.BANG||n===a.DOLLAR||n===a.AMP||n===a.PAREN_L||n===a.PAREN_R||n===a.DOT||n===a.SPREAD||n===a.COLON||n===a.EQUALS||n===a.AT||n===a.BRACKET_L||n===a.BRACKET_R||n===a.BRACE_L||n===a.PIPE||n===a.BRACE_R}function _(n){return n>=0&&n<=55295||n>=57344&&n<=1114111}function D(n,e){return q(n.charCodeAt(e))&&K(n.charCodeAt(e+1))}function q(n){return n>=55296&&n<=56319}function K(n){return n>=56320&&n<=57343}function T(n,e){const t=n.source.body.codePointAt(e);if(t===void 0)return a.EOF;if(t>=32&&t<=126){const i=String.fromCodePoint(t);return i==='"'?`'"'`:`"${i}"`}return"U+"+t.toString(16).toUpperCase().padStart(4,"0")}function u(n,e,t,i,s){const r=n.line,c=1+t-n.lineStart;return new $(e,t,i,r,c,s)}function oe(n,e){const t=n.source.body,i=t.length;let s=e;for(;s<i;){const r=t.charCodeAt(s);switch(r){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++n.line,n.lineStart=s;continue;case 13:t.charCodeAt(s+1)===10?s+=2:++s,++n.line,n.lineStart=s;continue;case 35:return ce(n,s);case 33:return u(n,a.BANG,s,s+1);case 36:return u(n,a.DOLLAR,s,s+1);case 38:return u(n,a.AMP,s,s+1);case 40:return u(n,a.PAREN_L,s,s+1);case 41:return u(n,a.PAREN_R,s,s+1);case 46:if(t.charCodeAt(s+1)===46&&t.charCodeAt(s+2)===46)return u(n,a.SPREAD,s,s+3);break;case 58:return u(n,a.COLON,s,s+1);case 61:return u(n,a.EQUALS,s,s+1);case 64:return u(n,a.AT,s,s+1);case 91:return u(n,a.BRACKET_L,s,s+1);case 93:return u(n,a.BRACKET_R,s,s+1);case 123:return u(n,a.BRACE_L,s,s+1);case 124:return u(n,a.PIPE,s,s+1);case 125:return u(n,a.BRACE_R,s,s+1);case 34:return t.charCodeAt(s+1)===34&&t.charCodeAt(s+2)===34?fe(n,s):ue(n,s)}if(C(r)||r===45)return he(n,s,r);if(j(r))return me(n,s);throw p(n.source,s,r===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:_(r)||D(t,s)?`Unexpected character: ${T(n,s)}.`:`Invalid character: ${T(n,s)}.`)}return u(n,a.EOF,i,i)}function ce(n,e){const t=n.source.body,i=t.length;let s=e+1;for(;s<i;){const r=t.charCodeAt(s);if(r===10||r===13)break;if(_(r))++s;else if(D(t,s))s+=2;else break}return u(n,a.COMMENT,e,s,t.slice(e+1,s))}function he(n,e,t){const i=n.source.body;let s=e,r=t,c=!1;if(r===45&&(r=i.charCodeAt(++s)),r===48){if(r=i.charCodeAt(++s),C(r))throw p(n.source,s,`Invalid number, unexpected digit after 0: ${T(n,s)}.`)}else s=R(n,s,r),r=i.charCodeAt(s);if(r===46&&(c=!0,r=i.charCodeAt(++s),s=R(n,s,r),r=i.charCodeAt(s)),(r===69||r===101)&&(c=!0,r=i.charCodeAt(++s),(r===43||r===45)&&(r=i.charCodeAt(++s)),s=R(n,s,r),r=i.charCodeAt(s)),r===46||j(r))throw p(n.source,s,`Invalid number, expected digit but got: ${T(n,s)}.`);return u(n,c?a.FLOAT:a.INT,e,s,i.slice(e,s))}function R(n,e,t){if(!C(t))throw p(n.source,e,`Invalid number, expected digit but got: ${T(n,e)}.`);const i=n.source.body;let s=e+1;for(;C(i.charCodeAt(s));)++s;return s}function ue(n,e){const t=n.source.body,i=t.length;let s=e+1,r=s,c="";for(;s<i;){const h=t.charCodeAt(s);if(h===34)return c+=t.slice(r,s),u(n,a.STRING,e,s+1,c);if(h===92){c+=t.slice(r,s);const d=t.charCodeAt(s+1)===117?t.charCodeAt(s+2)===123?le(n,s):pe(n,s):de(n,s);c+=d.value,s+=d.size,r=s;continue}if(h===10||h===13)break;if(_(h))++s;else if(D(t,s))s+=2;else throw p(n.source,s,`Invalid character within String: ${T(n,s)}.`)}throw p(n.source,s,"Unterminated string.")}function le(n,e){const t=n.source.body;let i=0,s=3;for(;s<12;){const r=t.charCodeAt(e+s++);if(r===125){if(s<5||!_(i))break;return{value:String.fromCodePoint(i),size:s}}if(i=i<<4|k(r),i<0)break}throw p(n.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+s)}".`)}function pe(n,e){const t=n.source.body,i=V(t,e+2);if(_(i))return{value:String.fromCodePoint(i),size:6};if(q(i)&&t.charCodeAt(e+6)===92&&t.charCodeAt(e+7)===117){const s=V(t,e+8);if(K(s))return{value:String.fromCodePoint(i,s),size:12}}throw p(n.source,e,`Invalid Unicode escape sequence: "${t.slice(e,e+6)}".`)}function V(n,e){return k(n.charCodeAt(e))<<12|k(n.charCodeAt(e+1))<<8|k(n.charCodeAt(e+2))<<4|k(n.charCodeAt(e+3))}function k(n){return n>=48&&n<=57?n-48:n>=65&&n<=70?n-55:n>=97&&n<=102?n-87:-1}function de(n,e){const t=n.source.body;switch(t.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw p(n.source,e,`Invalid character escape sequence: "${t.slice(e,e+2)}".`)}function fe(n,e){const t=n.source.body,i=t.length;let s=n.lineStart,r=e+3,c=r,h="";const d=[];for(;r<i;){const E=t.charCodeAt(r);if(E===34&&t.charCodeAt(r+1)===34&&t.charCodeAt(r+2)===34){h+=t.slice(c,r),d.push(h);const l=u(n,a.BLOCK_STRING,e,r+3,X(d).join(`
`));return n.line+=d.length-1,n.lineStart=s,l}if(E===92&&t.charCodeAt(r+1)===34&&t.charCodeAt(r+2)===34&&t.charCodeAt(r+3)===34){h+=t.slice(c,r),c=r+1,r+=4;continue}if(E===10||E===13){h+=t.slice(c,r),d.push(h),E===13&&t.charCodeAt(r+1)===10?r+=2:++r,h="",c=r,s=r;continue}if(_(E))++r;else if(D(t,r))r+=2;else throw p(n.source,r,`Invalid character within String: ${T(n,r)}.`)}throw p(n.source,r,"Unterminated string.")}function me(n,e){const t=n.source.body,i=t.length;let s=e+1;for(;s<i;){const r=t.charCodeAt(s);if(H(r))++s;else break}return u(n,a.NAME,e,s,t.slice(e,s))}const Ee=globalThis.process&&!0,xe=Ee?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if(typeof e=="object"&&e!==null){var i;const s=t.prototype[Symbol.toStringTag],r=Symbol.toStringTag in e?e[Symbol.toStringTag]:(i=e.constructor)===null||i===void 0?void 0:i.name;if(s===r){const c=G(e);throw new Error(`Cannot use ${s} "${c}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class Q{constructor(e,t="GraphQL request",i={line:1,column:1}){typeof e=="string"||S(!1,`Body must be a string. Received: ${G(e)}.`),this.body=e,this.name=t,this.locationOffset=i,this.locationOffset.line>0||S(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||S(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Ne(n){return xe(n,Q)}function Te(n,e){const t=new Ae(n,e),i=t.parseDocument();return Object.defineProperty(i,"tokenCount",{enumerable:!1,value:t.tokenCount}),i}class Ae{constructor(e,t={}){const{lexer:i,...s}=t;if(i)this._lexer=i;else{const r=Ne(e)?e:new Q(e);this._lexer=new re(r)}this._options=s,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){const e=this.expectToken(a.NAME);return this.node(e,{kind:o.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:o.DOCUMENT,definitions:this.many(a.SOF,this.parseDefinition,a.EOF)})}parseDefinition(){if(this.peek(a.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(e&&t.kind===a.BRACE_L)throw p(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are not supported on shorthand queries.");if(t.kind===a.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition()}if(e)throw p(this._lexer.source,this._lexer.token.start,"Unexpected description, only GraphQL definitions support descriptions.");if(t.value==="extend")return this.parseTypeSystemExtension()}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(a.BRACE_L))return this.node(e,{kind:o.OPERATION_DEFINITION,operation:O.QUERY,description:void 0,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseDescription(),i=this.parseOperationType();let s;return this.peek(a.NAME)&&(s=this.parseName()),this.node(e,{kind:o.OPERATION_DEFINITION,operation:i,description:t,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(a.NAME);switch(e.value){case"query":return O.QUERY;case"mutation":return O.MUTATION;case"subscription":return O.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(a.PAREN_L,this.parseVariableDefinition,a.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:o.VARIABLE_DEFINITION,description:this.parseDescription(),variable:this.parseVariable(),type:(this.expectToken(a.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(a.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(a.DOLLAR),this.node(e,{kind:o.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:o.SELECTION_SET,selections:this.many(a.BRACE_L,this.parseSelection,a.BRACE_R)})}parseSelection(){return this.peek(a.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let i,s;return this.expectOptionalToken(a.COLON)?(i=t,s=this.parseName()):s=t,this.node(e,{kind:o.FIELD,alias:i,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(a.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(a.PAREN_L,t,a.PAREN_R)}parseArgument(e=!1){const t=this._lexer.token,i=this.parseName();return this.expectToken(a.COLON),this.node(t,{kind:o.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(a.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(a.NAME)?this.node(e,{kind:o.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:o.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token,t=this.parseDescription();return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:o.FRAGMENT_DEFINITION,description:t,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:o.FRAGMENT_DEFINITION,description:t,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case a.BRACKET_L:return this.parseList(e);case a.BRACE_L:return this.parseObject(e);case a.INT:return this.advanceLexer(),this.node(t,{kind:o.INT,value:t.value});case a.FLOAT:return this.advanceLexer(),this.node(t,{kind:o.FLOAT,value:t.value});case a.STRING:case a.BLOCK_STRING:return this.parseStringLiteral();case a.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:o.BOOLEAN,value:!0});case"false":return this.node(t,{kind:o.BOOLEAN,value:!1});case"null":return this.node(t,{kind:o.NULL});default:return this.node(t,{kind:o.ENUM,value:t.value})}case a.DOLLAR:if(e)if(this.expectToken(a.DOLLAR),this._lexer.token.kind===a.NAME){const i=this._lexer.token.value;throw p(this._lexer.source,t.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(t);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:o.STRING,value:e.value,block:e.kind===a.BLOCK_STRING})}parseList(e){const t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:o.LIST,values:this.any(a.BRACKET_L,t,a.BRACKET_R)})}parseObject(e){const t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:o.OBJECT,fields:this.any(a.BRACE_L,t,a.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,i=this.parseName();return this.expectToken(a.COLON),this.node(t,{kind:o.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(a.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(a.AT),this.node(t,{kind:o.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(a.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(a.BRACKET_R),t=this.node(e,{kind:o.LIST_TYPE,type:i})}else t=this.parseNamedType();return this.expectOptionalToken(a.BANG)?this.node(e,{kind:o.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:o.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(a.STRING)||this.peek(a.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),s=this.many(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);return this.node(e,{kind:o.SCHEMA_DEFINITION,description:t,directives:i,operationTypes:s})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(a.COLON);const i=this.parseNamedType();return this.node(e,{kind:o.OPERATION_TYPE_DEFINITION,operation:t,type:i})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),s=this.parseConstDirectives();return this.node(e,{kind:o.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:s})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),s=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:o.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:s,directives:r,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(a.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseFieldDefinition,a.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),s=this.parseArgumentDefs();this.expectToken(a.COLON);const r=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(e,{kind:o.FIELD_DEFINITION,description:t,name:i,arguments:s,type:r,directives:c})}parseArgumentDefs(){return this.optionalMany(a.PAREN_L,this.parseInputValueDef,a.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),i=this.parseName();this.expectToken(a.COLON);const s=this.parseTypeReference();let r;this.expectOptionalToken(a.EQUALS)&&(r=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(e,{kind:o.INPUT_VALUE_DEFINITION,description:t,name:i,type:s,defaultValue:r,directives:c})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),s=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:o.INTERFACE_TYPE_DEFINITION,description:t,name:i,interfaces:s,directives:r,fields:c})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),s=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(e,{kind:o.UNION_TYPE_DEFINITION,description:t,name:i,directives:s,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(a.EQUALS)?this.delimitedMany(a.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),s=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(e,{kind:o.ENUM_TYPE_DEFINITION,description:t,name:i,directives:s,values:r})}parseEnumValuesDefinition(){return this.optionalMany(a.BRACE_L,this.parseEnumValueDefinition,a.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),i=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(e,{kind:o.ENUM_VALUE_DEFINITION,description:t,name:i,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw p(this._lexer.source,this._lexer.token.start,`${g(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),s=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(e,{kind:o.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:s,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseInputValueDef,a.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===a.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),i=this.optionalMany(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);if(t.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:o.SCHEMA_EXTENSION,directives:t,operationTypes:i})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(e,{kind:o.SCALAR_TYPE_EXTENSION,name:t,directives:i})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(i.length===0&&s.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:o.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:s,fields:r})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(i.length===0&&s.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:o.INTERFACE_TYPE_EXTENSION,name:t,interfaces:i,directives:s,fields:r})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),i=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:o.UNION_TYPE_EXTENSION,name:t,directives:i,types:s})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),i=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:o.ENUM_TYPE_EXTENSION,name:t,directives:i,values:s})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),i=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:o.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:s})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(a.AT);const i=this.parseName(),s=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(e,{kind:o.DIRECTIVE_DEFINITION,description:t,name:i,arguments:s,repeatable:r,locations:c})}parseDirectiveLocations(){return this.delimitedMany(a.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(w,t.value))return t;throw this.unexpected(e)}parseSchemaCoordinate(){const e=this._lexer.token,t=this.expectOptionalToken(a.AT),i=this.parseName();let s;!t&&this.expectOptionalToken(a.DOT)&&(s=this.parseName());let r;return(t||s)&&this.expectOptionalToken(a.PAREN_L)&&(r=this.parseName(),this.expectToken(a.COLON),this.expectToken(a.PAREN_R)),t?r?this.node(e,{kind:o.DIRECTIVE_ARGUMENT_COORDINATE,name:i,argumentName:r}):this.node(e,{kind:o.DIRECTIVE_COORDINATE,name:i}):s?r?this.node(e,{kind:o.ARGUMENT_COORDINATE,name:i,fieldName:s,argumentName:r}):this.node(e,{kind:o.MEMBER_COORDINATE,name:i,memberName:s}):this.node(e,{kind:o.TYPE_COORDINATE,name:i})}node(e,t){return this._options.noLocation!==!0&&(t.loc=new Z(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw p(this._lexer.source,t.start,`Expected ${z(e)}, found ${g(t)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const t=this._lexer.token;if(t.kind===a.NAME&&t.value===e)this.advanceLexer();else throw p(this._lexer.source,t.start,`Expected "${e}", found ${g(t)}.`)}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===a.NAME&&t.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const t=e??this._lexer.token;return p(this._lexer.source,t.start,`Unexpected ${g(t)}.`)}any(e,t,i){this.expectToken(e);const s=[];for(;!this.expectOptionalToken(i);)s.push(t.call(this));return s}optionalMany(e,t,i){if(this.expectOptionalToken(e)){const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(i));return s}return[]}many(e,t,i){this.expectToken(e);const s=[];do s.push(t.call(this));while(!this.expectOptionalToken(i));return s}delimitedMany(e,t){this.expectOptionalToken(e);const i=[];do i.push(t.call(this));while(this.expectOptionalToken(e));return i}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(t.kind!==a.EOF&&(++this._tokenCounter,e!==void 0&&this._tokenCounter>e))throw p(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function g(n){const e=n.value;return z(n.kind)+(e!=null?` "${e}"`:"")}function z(n){return ae(n)?`"${n}"`:n}var y=new Map,F=new Map,J=!0,v=!1;function W(n){return n.replace(/[\s,]+/g," ").trim()}function _e(n){return W(n.source.body.substring(n.start,n.end))}function Ie(n){var e=new Set,t=[];return n.definitions.forEach(function(i){if(i.kind==="FragmentDefinition"){var s=i.name.value,r=_e(i.loc),c=F.get(s);c&&!c.has(r)?J&&console.warn("Warning: fragment with name "+s+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):c||F.set(s,c=new Set),c.add(r),e.has(r)||(e.add(r),t.push(i))}else t.push(i)}),M(M({},n),{definitions:t})}function ke(n){var e=new Set(n.definitions);e.forEach(function(i){i.loc&&delete i.loc,Object.keys(i).forEach(function(s){var r=i[s];r&&typeof r=="object"&&e.add(r)})});var t=n.loc;return t&&(delete t.startToken,delete t.endToken),n}function Oe(n){var e=W(n);if(!y.has(e)){var t=Te(n,{experimentalFragmentVariables:v,allowLegacyFragmentVariables:v});if(!t||t.kind!=="Document")throw new Error("Not a valid GraphQL document.");y.set(e,ke(Ie(t)))}return y.get(e)}function m(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];typeof n=="string"&&(n=[n]);var i=n[0];return e.forEach(function(s,r){s&&s.kind==="Document"?i+=s.loc.source.body:i+=s,i+=n[r+1]}),Oe(i)}function ge(){y.clear(),F.clear()}function ye(){J=!1}function Ce(){v=!0}function ve(){v=!1}var I={gql:m,resetCaches:ge,disableFragmentWarnings:ye,enableExperimentalFragmentVariables:Ce,disableExperimentalFragmentVariables:ve};(function(n){n.gql=I.gql,n.resetCaches=I.resetCaches,n.disableFragmentWarnings=I.disableFragmentWarnings,n.enableExperimentalFragmentVariables=I.enableExperimentalFragmentVariables,n.disableExperimentalFragmentVariables=I.disableExperimentalFragmentVariables})(m||(m={}));m.default=m;const be=m`
  query SiteData {
    siteData(where: { siteDataSlug: "sitedata" }) {
      aboutMe
      profileImage {
        url
      }
      resumeLink {
        url
      }
      developmentMode
      text1
      text2
      text3
      text4
    }
  }
`,Se=m`
  query AllTools {
    tools {
      id
      name
      image {
        url
      }
    }
  }
`,Re=m`
  query AllPosts {
    posts(orderBy: id_DESC) {
      id
      slug
      coverImage {
        url
      }
      title
      excerpt
      publishedAt
      author {
        name
      }
      category {
        name
      }
    }
  }
`,Le=m`
  query Post($slug: String) {
    post(where: { slug: $slug }) {
      coverImage {
        url
      }
      title
      publishedAt
      excerpt
      category {
        name
      }
      date
      author {
        name
      }
      content {
        markdown
      }
    }
  }
`;m`
  query AllCategories {
    categories {
      id
      name
    }
  }
`;const we=m`
  query AllProjects {
    projects {
      id
      name
      image {
        url
      }
      subtitle
      slug
      tools {
        id
        name
        image {
          url
        }
      }
    }
  }
`,Fe=m`
  query Project($slug: String = "") {
    project(where: { slug: $slug }) {
      name
      description
      slug
      url
      image {
        id
        url
      }
      tools {
        name
        image {
          url
        }
      }
      project_image {
        url
      }
      project_videos
    }
  }
`,Pe=m`
  query AllCertificates {
    certificates {
      id
      title
      image {
        url
      }
      certUrl
    }
  }
`;m`
  mutation SendMessage(
    $email: String!
    $fullName: String!
    $message: String!
    $mobile: String!
    $subject: String!
  ) {
    createMessage(
      data: {
        email: $email
        fullName: $fullName
        message: $message
        mobile: $mobile
        subject: $subject
      }
    ) {
      id
    }
  }
`;export{Se as A,Le as P,be as S,Re as a,we as b,Pe as c,Fe as d};
